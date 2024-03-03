/**
 * @file Geo.ts
 * @module Geo
 * @description
 * Geo functions for converting coordinates to location and vice versa.
 */

const API_KEY = "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
const BASE_URL = "https://api.ipgeolocation.io/ipgeo?";

/**
 * Represents functions for handling geo-location.
 */
interface GeoInterface {
  /**
   * Converts latitude and longitude coordinates to a city name.
   * @param lat - The latitude coordinate.
   * @param lon - The longitude coordinate.
   * @param apiKey - The API key for the geo-location service. Optional, defaults to the global API_KEY.
   * @returns A Promise that resolves to the city name.
   */
  coordinatesToLocation: (lat: number, lon: number, apiKey?: string) => Promise<string>;
  
  /**
   * Converts a city name to latitude and longitude coordinates.
   * @param city - The name of the city.
   * @param apiKey - The API key for the geo-location service. Optional, defaults to the global API_KEY.
   * @returns A Promise that resolves to an object containing latitude and longitude coordinates.
   */
  locationToCoordinates: (city: string, apiKey?: string) => Promise<{ latitude: number; longitude: number }>;
}

export const Geo: GeoInterface = {
  coordinatesToLocation: async function (lat, lon, apiKey = API_KEY) {
    try {
      const apiUrl = `${BASE_URL}lat=${lat}&lon=${lon}&apiKey=${apiKey}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data.city;
    } catch (error) {
      console.error(`Error in coordinatesToLocation(${lat}, ${lon}): ${error}`);
      return ''; // Return empty string or handle the error as appropriate
    }
  },
  
  locationToCoordinates: async function (city = "Vienna", apiKey = API_KEY) {
    try {
      const apiUrl = `${BASE_URL}city=${city}&apiKey=${apiKey}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return { latitude: data.latitude, longitude: data.longitude };
    } catch (error) {
      console.error(`Error in locationToCoordinates(${city}): ${error}`);
      return { latitude: 0, longitude: 0 }; // Return default coordinates or handle the error as appropriate
    }
  },
};
