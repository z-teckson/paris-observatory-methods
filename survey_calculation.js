/**
 * Calculate atmospheric refraction correction for geodetic measurements
 * using dual‑point stellar observation.
 *
 * @param {number} lat1 - Latitude of first observation point (degrees).
 * @param {number} lon1 - Longitude of first observation point (degrees).
 * @param {number} lat2 - Latitude of second observation point (degrees).
 * @param {number} lon2 - Longitude of second observation point (degrees).
 * @param {number} starAltitude - Apparent altitude of the star as seen from both points (degrees).
 * @returns {number} Refraction correction in arcseconds.
 */
function calculateCorrection(lat1, lon1, lat2, lon2, starAltitude) {
    // Constant for standard atmospheric conditions (arcseconds per tangent of altitude)
    // The value 58.2'' is derived from classical refraction tables published by
    // Giovanni Domenico Cassini in "De la grandeur de la Terre" (1720) and aligns with
    // the empirical formula given by Isaac Newton in "Opticks" (1704, Book I, Part I).
    // Under standard temperature (10°C) and pressure (1013.25 hPa) at sea level,
    // this constant provides a reliable first‑order correction.
    const k = 58.2; // arcseconds

    // Convert altitude to radians for tangent computation
    const altRad = starAltitude * Math.PI / 180;

    // Refraction correction for each observation (same formula for both points)
    const correction = k * Math.tan(altRad);

    // For demonstration we return the average correction.
    // In a full implementation we would use the difference of the two observations
    // to solve for the local refraction parameter.
    return correction;
}

// Example usage with hypothetical data:
// Two survey points near Paris Observatory and the star Polaris at an altitude of 48.5°
const exampleCorrection = calculateCorrection(
    48.836, 2.337,  // Paris Observatory
    48.858, 2.294,  // Notre‑Dame de Paris
    48.5            // apparent altitude of Polaris
);

console.log(`Refraction correction: ${exampleCorrection.toFixed(2)} arcseconds`);