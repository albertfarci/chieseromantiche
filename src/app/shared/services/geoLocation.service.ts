import { Injectable } from '@angular/core';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class GeoLocationService {


    private checkRicalcoloSource: boolean = true

    public latitude;
    public longitude;


    private readonly checkPermissionSource = new BehaviorSubject<boolean>(false)
    checkPermission = this.checkPermissionSource.asObservable()

    private readonly currentPositionSource = new BehaviorSubject<any>(null)
    currentPosition = this.currentPositionSource.asObservable()

    constructor(
        private androidPermissions: AndroidPermissions,
        private geolocation: Geolocation,
        private locationAccuracy: LocationAccuracy) { }


    //Check if application having GPS access permission  
    checkGPSPermission() {

        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
            result => {

                if (result.hasPermission) {

                    //If having permission show 'Turn On GPS' dialogue
                    this.askToTurnOnGPS();
                } else {

                    //If not having permission ask for permission
                    this.requestGPSPermission();
                }
            },
            err => {
                alert(err);
            }
        );

    }

    requestGPSPermission() {
        this.locationAccuracy.canRequest().then((canRequest: boolean) => {
            if (canRequest) {
            } else {
                //Show 'GPS Permission Request' dialogue
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then(
                        () => {
                            // call method to turn on GPS
                            this.askToTurnOnGPS();
                        }
                    );
            }
        });
    }

    askToTurnOnGPS() {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
            () => {
                // When GPS Turned ON call method to get Accurate location coordinates
                this.getLocationCoordinates()
                this.checkPermissionSource.next(true)

            }
        );
    }


    askToTurnOnGPSForHome() {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
            () => {
                // When GPS Turned ON call method to get Accurate location coordinates
                this.getLocationCoordinates()
                this.checkPermissionSource.next(true)
            },
            error => alert(error.message)
        );
    }

    checkGPSPermissionHome() {

        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
            result => {

                if (result.hasPermission) {

                    //If having permission show 'Turn On GPS' dialogue
                    this.askToTurnOnGPSForHome();
                } else {

                    //If not having permission ask for permission
                    this.requestGPSPermissionHome();
                }
            },
            err => {
                alert(err);
            }
        );

    }

    requestGPSPermissionHome() {
        this.locationAccuracy.canRequest().then((canRequest: boolean) => {
            if (canRequest) {
            } else {
                //Show 'GPS Permission Request' dialogue
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then(
                        () => {
                            // call method to turn on GPS
                            this.askToTurnOnGPS();
                        },
                        error => {
                            //Show alert if user click on 'No Thanks'
                            alert('requestPermission Error requesting location permissions ' + error)
                        }
                    );
            }
        });
    }


    // Methos to get device accurate coordinates using device GPS
    getLocationCoordinates() {

        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(
            resp => {
                //this.currentPointsService.setPointA({ latitudine: resp.coords.latitude, longitudine: resp.coords.longitude, title: "Posizione corrente", img: "", abstract: "" })
                console.log(resp)
                this.currentPositionSource.next({ latitudine: resp.coords.latitude, longitudine: resp.coords.longitude, title: "Posizione corrente", img: "", abstract: "" })

            }
        )
    }


    getLocationCoordinatesSetup() {
        //this.getLocationCoordinates()
        this.checkGPSPermission()
    }


    errorHandler(err) {
        if (err.code == 1) {
            alert("Error: Access is denied!");
        } else if (err.code == 2) {
            alert("Error: Position is unavailable!");
        }
    }

}