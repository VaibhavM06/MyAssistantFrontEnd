import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    
    
    
  ],
  imports: [
    ChatComponent,
    AppComponent,
    BrowserModule,  // BrowserModule includes CommonModule
    FormsModule,
    MessageComponent  
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
