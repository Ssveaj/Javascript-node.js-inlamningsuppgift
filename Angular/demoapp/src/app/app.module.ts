import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navigation/navbar/navbar/navbar.component';
import { MessagesComponent } from './components/navigation/messages/messages/messages.component';
import { NotificationsComponent } from './components/navigation/notification/notifications/notifications.component';
import { UserprofileComponent } from './components/navigation/userprofile/userprofile/userprofile.component';
import { TotalusersComponent } from './components/Total/totalusers/totalusers/totalusers.component';
import { WelcomemessageComponent } from './components/welcomemessage/welcomemessage/welcomemessage.component';
import { TotalprojectsComponent } from './components/Total/totalprojects/totalprojects/totalprojects.component';
import { DownloadsComponent } from './components/downloads/downloads/downloads.component';
import { TotalsalesComponent } from './components/Total/totalsales/totalsales/totalsales.component';
import { TotalsalesiconComponent } from './components/Total/totalsalesicon/totalsalesicon/totalsalesicon.component';
import { TotalpurchasesComponent } from './components/Total/totalpurchases/totalpurchases/totalpurchases.component';
import { TotalordersComponent } from './components/Total/totalorders/totalorders/totalorders.component';
import { TotalgrowthComponent } from './components/Total/totalgrowth/totalgrowth/totalgrowth.component';
import { TicketsComponent } from './components/tickets/tickets/tickets.component';
import { UpdatesComponent } from './components/updates/updates/updates.component';
import { DistributionComponent } from './components/distribution/distribution/distribution.component';
import { SalereportComponent } from './components/salereport/salereport/salereport.component';
import { OpeninvoicesComponent } from './components/openinvoices/openinvoices/openinvoices.component';
import { FooterComponent } from './components/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessagesComponent,
    NotificationsComponent,
    UserprofileComponent,
    TotalusersComponent,
    WelcomemessageComponent,
    TotalprojectsComponent,
    DownloadsComponent,
    TotalsalesComponent,
    TotalsalesiconComponent,
    TotalpurchasesComponent,
    TotalordersComponent,
    TotalgrowthComponent,
    TicketsComponent,
    UpdatesComponent,
    DistributionComponent,
    SalereportComponent,
    OpeninvoicesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
