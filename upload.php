<form action="upload.php" method="post" enctype="multipart/form-data">
  <label for="music_file">Select a music file:</label>
  <input type="file" name="music_file" id="music_file" required>
  <button type="submit">Upload</button>
</form>
You sent
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if a file was uploaded without errors
    if (isset($_FILES['music_file']) && $_FILES['music_file']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['music_file'];
        $upload_dir = 'uploads/'; // Directory to store uploaded files
        $file_name = uniqid() . '_' . $file['name']; // Generate unique filename
        $file_path = $upload_dir . $file_name;

        // Move the uploaded file to the upload directory
        if (move_uploaded_file($file['tmp_name'], $file_path)) {
            echo "Music file uploaded successfully: " . $file_name;
        } else {
            echo "Error uploading file.";
        }
    } else {
        echo "No file was uploaded.";
    }
}

