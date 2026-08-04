package com.ganeshfurniture.backend.controller;

import com.ganeshfurniture.backend.service.FileStorageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/files")
@CrossOrigin(origins = "http://localhost:5173")
public class FileController {

    private final FileStorageService fileStorageService;

    public FileController(FileStorageService fileStorageService) {
        this.fileStorageService = fileStorageService;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(
            @RequestParam("file") MultipartFile file) {

        try {

            String fileName = fileStorageService.saveFile(file);

            return ResponseEntity.ok(fileName);

        } catch (Exception e) {

            return ResponseEntity.badRequest()
                    .body("Upload Failed");

        }

    }
}