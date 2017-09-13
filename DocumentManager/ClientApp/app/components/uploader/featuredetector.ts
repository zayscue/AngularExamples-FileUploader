import { Injectable } from '@angular/core';

@Injectable()
export class FeatureDetector {
    browserSupportsDragAndDrop() {
        const div = document.createElement('div');
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div))
            && 'FormData' in window && 'FileReader' in window;
    }
}