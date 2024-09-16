import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions'; // OpenAI API URL
  private apiKey = 'YOUR_OPENAI_API_KEY_HERE'; // Replace with your API key

  constructor(private http: HttpClient) { }

  getResponse(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: "gpt-3.5-turbo", // Specify the model you'd like to use
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
      temperature: 0.7
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
