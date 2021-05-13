import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicComponent } from './topic/topic.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsumerGroupsComponent } from './consumer-groups/consumer-groups.component';
import { RouterModule, Routes } from '@angular/router';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { ConsumerGroupDetailsComponent } from './consumer-group-details/consumer-group-details.component';
import { KafkaEnvironmentComponent } from './kafka-environment/kafka-environment.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { MessageSenderComponent } from './message-sender/message-sender.component';

const appRoutes: Routes = [
  { path: ':environment/topics', component: TopicComponent },
  { path: ':environment/topics/:name', component: TopicDetailsComponent },
  { path: ':environment/consumer-groups', component: ConsumerGroupsComponent },
  { path: ':environment/consumer-groups/:name', component: ConsumerGroupDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    ConsumerGroupsComponent,
    TopicDetailsComponent,
    ConsumerGroupDetailsComponent,
    KafkaEnvironmentComponent,
    ErrorModalComponent,
    ConfirmationModalComponent,
    MessageSenderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
