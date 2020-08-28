class GeoLocationService {
  constructor(http) {
    this.http = http;
    this.apiKey = process.env.API_KEY;
  }

  async getAddress(latitude, longitude) {
    const adressData = await this.http.get(
      `http://www.mapquestapi.com/geocoding/v1/reverse?key=${this.apiKey}&location=${latitude},${longitude}&includeRoadMetadata=true&includeNearestIntersection=true`
    );

    const location = adressData.data.results[0].locations[0];

    if (!location) {
      throw new Error('Endereço não encontrado para essa localidade');
    }

    return location;
  }
}

module.exports = GeoLocationService;
