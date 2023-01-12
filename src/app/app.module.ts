import { CabecalhoModule } from './components/cabecalho/cabecalho.module';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { HeaderComponent } from './components/header/header.component';
import { BoardComponent } from './components/board/board.component';
import { LoginComponent } from './components/home/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MensagemModule } from './components/mensagem/mensagem.module';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    BoardComponent,
    LoginComponent,
    HomeComponent,

  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MensagemModule,
    CabecalhoModule,
  ],
})
export class AppModule {}
