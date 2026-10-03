<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

$dataFile = __DIR__ . '/data/blogs.json';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dataFile)) {
        echo file_get_contents($dataFile);
    } else {
        echo json_encode([]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    if ($data !== null) {
        if (file_put_contents($dataFile, json_encode($data, JSON_PRETTY_PRINT))) {
            echo json_encode(['success' => true, 'message' => 'Blogs saved successfully.']);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to write to file. Check permissions on api/data folder.']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid JSON payload.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
}
