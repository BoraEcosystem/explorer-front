import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrblockComponent } from './components/brblock/brblock.component';
import { BrtransactionComponent } from './components/brtransaction/brtransaction.component';
import { BrtransactionhashComponent } from './components/brtransactionhash/brtransactionhash.component';
import { BrblockinfoComponent } from './components/brblockinfo/brblockinfo.component';
import { BraccountComponent } from './components/braccount/braccount.component';

import { BptransactionComponent } from './components/bptransaction/bptransaction.component';
import { BptransactionhashComponent } from './components/bptransactionhash/bptransactionhash.component';
import { BpblockComponent } from './components/bpblock/bpblock.component';
import { BpblockinfoComponent } from './components/bpblockinfo/bpblockinfo.component';
import { BpaccountComponent } from './components/bpaccount/bpaccount.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path : 'bora_transaction/:page/:pageSize', component: BrtransactionComponent },
  { path : 'bora_transaction/:hash', component: BrtransactionhashComponent },
  { path : 'bora_block/:blockNo', component: BrblockinfoComponent },
  { path : 'bora_block/:page/:pageSize', component: BrblockComponent },
  { path : 'bora_account/:page/:pageSize', component: BraccountComponent },
  { path : 'bora_account/:addr/:page/:pageSize', component: BraccountComponent },

  { path : 'borapoint_transaction/:appId/:page/:pageSize', component: BptransactionComponent },
  { path : 'borapoint_transaction/:appId/:hash', component: BptransactionhashComponent },
  { path : 'borapoint_block/:appId/:blockNo', component: BpblockinfoComponent },
  { path : 'borapoint_block/:appId/:page/:pageSize', component: BpblockComponent },
  { path : 'borapoint_account/:appId/:addr/:page/:pageSize', component: BpaccountComponent },
  { path : 'borapoint_account/:appId/:page/:pageSize', component: BpaccountComponent },

  { path : 'settings', component: SettingsComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
