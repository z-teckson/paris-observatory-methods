# Atmospheric Refraction Correction via Dual-Point Stellar Observation

## Introduction
Atmospheric refraction bends the light from celestial objects as they pass through the Earth's atmosphere, causing an apparent elevation that is higher than the true geometric altitude. For precise geodetic measurements, this systematic error must be corrected. This document describes a novel method that uses simultaneous observations of a known star from two distinct survey points to derive a local refraction correction.

## Mathematical Foundation
Let \( P_1 \) and \( P_2 \) be two points on the Earth's surface with known geographic coordinates (latitude, longitude). At a precise universal time \( t \), both observers measure the apparent altitude \( h_1 \), \( h_2 \) of the same star. The true geometric altitudes \( H_1 \), \( H_2 \) are related by spherical trigonometry:

\[
\cos H_i = \sin \phi_i \sin \delta + \cos \phi_i \cos \delta \cos \theta_i
\]

where \( \phi_i \) is the observer's latitude, \( \delta \) is the star's declination, and \( \theta_i \) is the hour angle at the observation time.

The refraction correction \( R_i \) for each observation can be approximated by the standard formula:

\[
R_i = k \cdot \tan h_i
\]

with \( k \) a constant that depends on atmospheric conditions (typically \( k \approx 58.2'' \) at sea level and standard temperature/pressure). The true altitude is then:

\[
H_i = h_i - R_i
\]

## Instrumentation
- Two identical transit instruments equipped with telescopic sights and graduated circles.
- Precise chronometers synchronized to a common time standard.
- A catalogue of star positions (e.g., Flamsteed's *Historia Coelestis Britannica*).

## Observational Procedure
1. Select a bright star with known equatorial coordinates (right ascension and declination).
2. Station the two instruments at the survey points \( P_1 \) and \( P_2 \).
3. At an agreed universal time, each observer measures the apparent altitude of the star to the nearest arcsecond.
4. Record the local temperature, pressure, and humidity to allow for minor adjustments of the constant \( k \).

## Calculation of the Correction
1. Compute the true geometric altitudes \( H_1, H_2 \) using the star's coordinates and the known positions of \( P_1, P_2 \).
2. From the measured apparent altitudes \( h_1, h_2 \), solve for the effective refraction constant \( k \) that satisfies \( H_i = h_i - k \tan h_i \) for both observations.
3. Use this refined \( k \) to correct subsequent measurements made under the same atmospheric conditions.

## Advantages
- Eliminates the need for an assumed standard atmospheric profile.
- Directly accounts for local meteorological variations.
- Can be applied to any pair of points within visual range of the same star.

## Limitations
- Requires clear skies simultaneously at both locations.
- Demands precise timekeeping and coordination.
- The method assumes a plane‑parallel atmosphere over the small region spanned by the two points.

## References
- Cassini, G.D. *De la grandeur de la Terre*. Paris, 1720.
- Newton, I. *Opticks*. London, 1704.
- Flamsteed, J. *Historia Coelestis Britannica*. London, 1725.