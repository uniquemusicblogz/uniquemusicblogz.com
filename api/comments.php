<?php
// api/comments.php
// A simple JSON-based comment handler. 
// No database required - saves comments to a 'data' folder.

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow requests from any origin (adjust for production)
header('Access-Control-Allow-Methods: GET, POST');

$dataFile = '../data/comments.json';

// Ensure data directory exists
if (!file_exists('../data')) {
    mkdir('../data', 0777, true);
}

// Helper: Read comments
function getComments($file) {
    if (!file_exists($file)) return [];
    $json = file_get_contents($file);
    return json_decode($json, true) ?? [];
}

// Handle Requests
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    // Get comments for a specific post_id
    $postId = $_GET['post_id'] ?? null;
    
    if (!$postId) {
        echo json_encode(['error' => 'Post ID required']);
        exit;
    }

    $allComments = getComments($dataFile);
    $postComments = $allComments[$postId] ?? [];
    
    // Sort by date (newest first)
    usort($postComments, function($a, $b) {
        return strtotime($b['date']) - strtotime($a['date']);
    });

    echo json_encode($postComments);

} elseif ($method === 'POST') {
    // Save a new comment
    $input = json_decode(file_get_contents('php://input'), true);

    $postId = $input['post_id'] ?? null;
    $name = htmlspecialchars($input['name'] ?? 'Anonymous');
    $text = htmlspecialchars($input['text'] ?? '');

    if (!$postId || !$text) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing required fields']);
        exit;
    }

    $newComment = [
        'id' => uniqid(),
        'name' => $name,
        'text' => $text,
        'date' => date('Y-m-d H:i:s')
    ];

    $allComments = getComments($dataFile);
    
    if (!isset($allComments[$postId])) {
        $allComments[$postId] = [];
    }

    $allComments[$postId][] = $newComment;

    if (file_put_contents($dataFile, json_encode($allComments, JSON_PRETTY_PRINT))) {
        echo json_encode(['success' => true, 'comment' => $newComment]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to save comment']);
    }
}
?>