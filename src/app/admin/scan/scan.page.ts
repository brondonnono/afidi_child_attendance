import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  public textToCode: string;
  public showCamera = false;
  public textScanned: string = '';
  public myAngularxQrCode: string = null;

  constructor(
    // private iab: InAppBrowser,
    // private qrScanner: QRScanner,
    public alertController: AlertController
  ) {
    this.scanCode();
  }

  ngOnInit() {}

  createQRCode() {
    this.myAngularxQrCode = this.textToCode;
    this.textToCode = "";
  }

  scanCode() {
    this.showCamera = true;
    // Optionally request the permission early
    // this.qrScanner.prepare()
    // .then((status: QRScannerStatus) => {
    //   if (status.authorized) {
    //     // start scanning
    //     console.log('Scan en cours...' + JSON.stringify(status));
    //     const scanSub = this.qrScanner.scan().subscribe((text: any) => {
    //       console.log('Scanned something', text.result);
    //       this.textScanned = text.result;
    //       this.qrScanner.hide(); // hide camera preview
    //       scanSub.unsubscribe(); // stop scanning
    //       this.showCamera = false;
    //     });
    //   } else if (status.denied) {
    //     // camera permission was permanently denied
    //   } else {
    //     // permission was denied, but not permanently. You can ask for permission again at a later time.
    //   }
    // })
    // .catch((e: any) => console.log('Error is', e));
  }

  closeCamera() {
    this.showCamera = false;
    // this.qrScanner.hide(); // hide camera preview
    // this.qrScanner.destroy();
  }

  openLink(link: any) {
    // const browser = this.iab.create(link, '_system', 'location=yes');
  }

}
