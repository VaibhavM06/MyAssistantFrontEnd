import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
  //styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message!: { content: string, isUser: boolean };
  formatMessage(content: string): string {
    // Split the content by line and replace lines starting with '*' with bullet points
    const lines = content.split('\n');
    let formattedContent = '';
    let inList = false;
  
    lines.forEach(line => {
      if (line.trim().startsWith('*')) {
        if (!inList) {
          formattedContent += '<ul>';
          inList = true;
        }
        // Remove the '*' and wrap the remaining text in <li> tags
        formattedContent += `<li>${line.replace('*', '').trim()}</li>`;
      } else {
        if (inList) {
          formattedContent += '</ul>';
          inList = false;
        }
        formattedContent += `<p>${line.trim()}</p>`;
      }
    });
  
    // Close any remaining open <ul> tag
    if (inList) {
      formattedContent += '</ul>';
    }
  
    return formattedContent;
  }
  

}


