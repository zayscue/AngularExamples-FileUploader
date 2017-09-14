import { Injectable } from '@angular/core';

@Injectable()
export class UploadService {
    async uploadFiles(files: FileList) {
        if (files.length <= 0) return;
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileName = file.name;
            formData.append(fileName, file);
        }
        await fetch('api/documents/upload',
            {
                method: 'POST',
                body: formData
            }
        );
    }
}