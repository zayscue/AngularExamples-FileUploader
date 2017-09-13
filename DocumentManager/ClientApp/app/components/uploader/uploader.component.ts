import { Component, ViewChild, ElementRef } from '@angular/core';
import { FeatureDetector } from './featuredetector';

@Component({
    selector: 'uploader',
    providers: [FeatureDetector],
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.css']
})
export class UploaderComponent {
    @ViewChild('updateForm') form: ElementRef;
    droppedFiles: FileList;
    labelText: string;
    spanText: string;
    dragAndDropSupported: boolean;

    constructor(private featureDetector : FeatureDetector) { }

    ngOnInit() {
        this.labelText = 'Choose a file';
        this.spanText = ' or drag it here';
        this.dragAndDropSupported = this.featureDetector.browserSupportsDragAndDrop();
    }

    onDragOver(event: any) {
        event.preventDefault();
    }

    onDrop(event: any) {
        event.preventDefault();
        this.droppedFiles = event.dataTransfer.files;
        this.showFiles();
        const submitEvent = new Event('submit',
            {
                'bubbles': true,
                'cancelable': true
            });
        this.form.nativeElement.dispatchEvent(submitEvent);
    }

    onSubmit(event: any) {
        // use an injectable class to post this.droppedFiles to the backend web service
        if (this.form.nativeElement.classList.contains('is-uploading')) return false;
        this.form.nativeElement.classList.add('is-uploading');
        this.form.nativeElement.classList.remove('is-error');
        const callback = () => {
            this.form.nativeElement.classList.remove('is-uploading');
        };
        setTimeout(callback, 3000);
    }

    onChange(event: any) {
        this.droppedFiles = event.target.files;
        this.showFiles();
        const submitEvent = new Event('submit',
            {
                'bubbles': true,
                'cancelable': true
            });
        this.form.nativeElement.dispatchEvent(submitEvent);
    }

    private showFiles() {
        this.labelText = this.droppedFiles.length > 1
            ? this.droppedFiles.length + ' files selected'
            : this.droppedFiles[0].name;
        this.spanText = '';
    }
}