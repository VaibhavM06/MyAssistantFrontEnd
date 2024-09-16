import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from "./components/chat/chat.component";

@Component({
  selector: 'app-root',  // Changed from 'app-chat' to 'app-root'
  standalone: true,
  imports: [RouterOutlet, ChatComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Fixed 'styleUrls' instead of 'styleUrl'
})
export class AppComponent {
  title = 'myAssistant';
}
