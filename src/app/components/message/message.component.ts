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
  formatMessage(content: string): string{
    return content.replace(/\n/g, '<br>').replace(/\*/g, '&bull');
  }

}


