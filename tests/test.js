var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;

chai.use(chaiHttp);

let app = "api.openweathermap.org/data/2.5";
let api_key = "7e512de36fd278593dc6dd9c793c2626";
let city = "Mountain View";
let lat = 35;
let lon = 139;
let zip = 94040;

describe('Open Weather API Tests', function() {
    describe('Query URL by city name', function() {
        it('Name attribute should correspond to entered city name', function() {
            let url = '/weather?q=' + city + '&APPID=' + api_key;
            chai.request(app)
                .get(url)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body.name).to.equal(city);
                });
        });
    });

    describe('Query URL by latitude and longitude', function() {
        it('Coord.lat and Coord.lon attribute should correspond to entered latitude and longitude', function() {
            let url = '/weather?lat=' + lat + '&lon=' + lon + '&APPID=' + api_key;
            chai.request(app)
                .get(url)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body.coord.lat).to.equal(lat);
                    expect(res.body.coord.lon).to.equal(lon);
                });
        });
    });

    describe('Query URL by zip code', function() {
        it('Name attribute should correspond to the city name of the entered zip code', function() {
            let url = '/weather?zip=' + zip + '&APPID=' + api_key;
            chai.request(app)
                .get(url)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body.name).to.equal(city);
                });
        });
    });
});
