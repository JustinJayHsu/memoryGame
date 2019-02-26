import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { MatInputModule, MatCardModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameComponent } from './game/game.component';
import { GameService } from './game/game.service';
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
