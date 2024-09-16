import { Component } from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {MessageComponent} from '../message/message.component'
import {OpenAiService} from '../../services/openai.service'
import { subscribe } from 'node:diagnostics_channel';
import { response } from 'express';
import { error } from 'node:console';

@Component({
  selector: 'app-chat',  // This should remain as 'app-chat'
  standalone: true,       // If it's a standalone component, ensure this is set
  imports:[FormsModule, CommonModule, MessageComponent],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  userInput: string = '';
  messages: {content: string, isUser: boolean}[] = [];

  constructor(private chatService: ChatService) {}


  sendMessage() {
   if(this.userInput.trim()){
    console.log('USERINPT: ', this.userInput)
    //User message
    this.messages.push({content:this.userInput, isUser: true});

    //send message to API
    this.chatService.getResponse(this.userInput).subscribe(
      (response) => {
        let reply = response.content
        console.log('RESPONSE from API: ', reply);
        reply = reply.replace(/\*/g, ' ');
        this.messages.push({content: reply, isUser:false});
      },
      (error) => {
        console.log('Error : ',error)
        this.messages.push({content:'Error in Generating response', isUser:false});
      }
    );
    this.userInput = '';
   }
  }
}
