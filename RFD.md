# RFD: Automobile.lk marketplace and owner ecosystem

**Status:** Proposed  
**Date:** 29 September 2026  
**Scope:** Customer experience, seller experience, services, communities, and operating rules

## 1. Purpose

Automobile.lk should help people in Sri Lanka discover, compare, buy, and sell vehicles, then find the services and communities relevant to ownership. Dealers and individual sellers must have equal access to the core listing flow. Buyers should see complete, trustworthy vehicle details and control when a seller's phone number is revealed.

This document describes the complete experience and operating rules expected of Automobile.lk.

## 2. Product scope and complete process

The platform covers vehicle discovery and sales, seller profiles, buyer inquiries, registered garages, fuel and charging information, vehicle clubs, parts, roadside help, finance guidance, and automotive content. Staff should be able to review and manage the information shown to the public.

A vehicle moves through this process: seller registration and contact verification → listing draft and photo upload → ownership and vehicle information declaration → validation and moderation → publication → buyer search and contact → seller response and viewing → sale/withdrawal → archive and retention. Dealers and individual sellers use this same core flow with seller-specific profile and verification fields.

## 3. Vehicle marketplace features

The marketplace must include location and seller-type browsing, promoted listings clearly marked as such, sorting, result counts, and saved searches. Each result should show a photo, vehicle title, mileage, location, price, posting recency, and relevant seller or promotion labels.

Each vehicle page should show photos, price, location, posting date, view count, make, model, variant, manufacture year, condition, registration status, transmission, body type, fuel, engine capacity, mileage, description, seller identity, related vehicles from the same seller, contact options, and a way to report the ad. Buyers should be able to save the listing and see practical safety advice.

The selling journey should cover account creation or sign-in, seller type, vehicle category, location, full vehicle details, ownership and registration information, price and negotiability, contact preferences, multiple photos, a final review, and publication review. Sellers should be able to edit or withdraw an ad and see its status. A promoted listing option may be offered, with its price and placement clearly explained.

## 4. Users and primary journeys

| User | Primary journey |
| --- | --- |
| Buyer | Search and filter, inspect a listing and ownership details, compare/save, reveal a phone number or send an inquiry, arrange a viewing. |
| Individual seller | Register, verify contact, create and manage a listing, maintain a seller page and gallery, respond to inquiries. |
| Dealer | Maintain a verified storefront, team contacts, gallery, inventory, and test-drive inquiries. |
| Garage operator | Submit business registration evidence and service details for approval before appearing in search. |
| Club member or organizer | Discover a vehicle club, join or request membership, browse events and club content. |
| Administrator | Review listings, garages, banners, station data, clubs, reports, and abuse signals. |

## 5. Functional requirements

### 5.1 Home page and banners

- Add a managed home-page banner area with desktop/mobile images, headline, short copy, call to action, destination URL, start/end dates, display order, and active state. Support multiple banners with accessible controls and sensible behavior when none are active.
- Keep search prominent. Provide entry points to vehicles, individual sellers, dealers, parts, registered garages, fuel prices/stations, EV charging, and clubs.
- Label paid placements as sponsored. Do not allow banner copy to claim verification or prices that have not been checked.
- Admins can preview, schedule, activate, and retire banners; track impressions and clicks.

### 5.2 Vehicle search, model filtering, and discovery

- Search by keyword and browse new, used, reconditioned, and electric vehicles. Filters must include make, **model**, variant/trim where available, year range, price range, mileage, condition, **registered or unregistered status**, body type, fuel, transmission, seller type, and number of previous owners. Include province and district/city filters, with location options based on a maintained Sri Lankan location directory.
- Model choices depend on the selected make; a buyer can still search an uncommon model. Filters should work together, show the selected options and result count, and offer a clear-all action.
- Offer sort by newest, price low/high, and mileage. Buyers should be able to browse further results without losing their selected filters.
- Cards show photo, title, year, mileage, district, price, seller type, and meaningful badges. Promoted listings must remain visibly labeled and must not silently displace the buyer's chosen sort.
- Support saved vehicles and searches, alerts, comparison, brand/model landing pages, and useful empty states. Saved items, searches, alerts, and comparisons should remain available when a buyer returns.

### 5.3 Vehicle listing and ownership information

- Both **registered and unregistered vehicles** may be listed by individual sellers and dealers. Sellers must select the correct status, and buyers must see it clearly on search results and the vehicle page. For registered vehicles, show the year of first registration and registration country where relevant. For unregistered vehicles, state why they are unregistered (for example, brand new or recently imported) and whether local registration is pending or will be the buyer's responsibility. Never describe an unregistered vehicle as road-ready without a verified basis.
- A listing must show title, category, make, model, variant, manufacture year, registration year if applicable, condition, body type, fuel, transmission, engine capacity or EV battery/range where relevant, mileage, color, location, price in LKR, negotiability, description, features, photos, seller type, and availability status.
- **Ownership information:** seller's relationship to the vehicle (registered owner, family representative, dealer stock, broker/agent, or other), number of previous owners or “unknown”, registration status, and whether supporting ownership, import, or transfer documents were checked. Display the declared ownership information and verification state separately. For an unregistered vehicle, explain that a local registration history may not yet exist. Never show documents or personal identifiers publicly.
- Where known, include service history, accident/repair disclosure, import status, warranty, finance/lease status, and inspection details. Mark unknown fields explicitly rather than implying a clean history.
- Vehicle pages show a photo gallery, key specifications, ownership section, description, seller details, posting date, similar listings, a way to report concerns, and safety guidance. Photos should be clear and arranged in a useful order.
- Listing states: draft, pending review, published, rejected with reason, paused, sold, and expired. Sellers can edit, renew, mark sold, and view inquiries. Changes to sensitive fields can return to review.

### 5.4 Sellers, galleries, and contact reveal

- Individual sellers may create listings without becoming dealers. Both seller types get a public profile page with name/display name, location, trust/verification status, profile or storefront cover, **gallery page**, active inventory, and contact controls. Dealer pages may additionally show business details, opening hours, ratings, and team information.
- A seller gallery contains the seller's approved vehicle photos, grouped by listing; each image links to its listing. Private sellers control profile visibility and may use a display name. Removed/sold vehicle photos follow the seller's retention settings.
- Phone numbers are hidden on vehicle and seller pages until a visitor clicks **Show number**. Visitors should understand whose number they are revealing. The platform should record how often numbers are revealed and protect sellers from misuse. Guests may reveal numbers unless repeated abuse makes an account requirement necessary.
- Chat, WhatsApp, inquiry, and test-drive actions should be available where the seller opts in. Give sellers control over which contact methods they make available.

### 5.5 Fuel prices, fuel stations, and EV charging

- Provide a fuel-prices page for Petrol 92/95, diesel, super diesel, and other locally applicable grades. Each price must show currency, unit, effective date/time, source, and last checked time. Keep previous prices for a change history. Never show a stale value as current; mark it stale or unavailable.
- Provide a searchable fuel-station directory/map with operator, address, coordinates, opening hours, available fuel grades, contact, facilities, and last verification. Support location, operator, grade, and open-now filters. Availability or queue data is shown only when a trustworthy feed exists and must carry a timestamp.
- Provide an **EV charging points** directory/map (the request says “AV”; this RFD assumes electric-vehicle charging) with operator, location, connector types, power in kW, number of ports, access hours, payment method, price if known, and last verification. Filter by connector, minimum power, operator, location, and access hours. Show live availability only when it is reliable; otherwise say status unknown.
- Station operators and staff can suggest and review corrections. Every price and station entry needs a named source and a person responsible for keeping it accurate.

### 5.6 Registered garages only

- Only garages whose business registration has been reviewed and approved may appear in the public garage directory. A “Registered garage” label must mean that this check has been completed.
- Onboarding captures legal/business name, registration number and document, address, contact, specialties, services, hours, and service area. Staff can approve, reject, suspend, or remove a garage, with a stated reason. Registration documents remain private.
- Display a clear “Registered garage” badge with the last verification date. Suspend or hide garages whose registration is revoked or expires. Support reporting inaccurate information and periodic revalidation.
- Keep service stations, fuel stations, and towing providers in their own categories; garage-only rules should not be inferred for other categories without an explicit policy.

### 5.7 Vehicle clubs

- Create club directory and pages for communities such as **Wagon R Club**, **BMW Club**, and **Mercedes-Benz Club**. A club includes name, description, eligible makes/models, cover/gallery, location or islandwide scope, rules, moderators, membership policy, and status.
- Users can discover clubs by make/model, request to join or join open clubs, view announcements and events, and report inappropriate content. Organizers can manage members and moderate posts/events. Club pages may link to relevant vehicle listings and guides without allowing unreviewed sales posts to bypass listing rules.
- Admins approve new clubs and handle duplicate names, impersonation, and abuse. Club pages show accurate member counts and activity.

### 5.8 Supporting marketplace and editorial features

- Build a parts marketplace with chassis/VIN fitment search, part seller details, and inquiries.
- Build dealer discovery and stores, towing, maintenance/service stations, finance and insurance guidance/calculators, an EV guide, reviews, news, awards, safety advice, saved cars, alerts, and account ad management.
- Editorial claims, loan/insurance figures, price history, deal ratings, service ratings, and badges need real sources or clear illustrative labeling before public launch. Users should be able to report inaccurate or fraudulent content.

## 6. Experience and trust standards

- The service should be easy to use on a phone as well as a computer, including for people using accessibility tools.
- Searches and pages should respond promptly, and vehicle photos should be clear without slowing the experience.
- Personal contact details and ownership documents must be handled privately. Public pages should show only information the seller has agreed to share.
- Buyers need clear ways to report suspicious listings, inaccurate information, and misuse. Staff need a consistent review process and a way to explain decisions to affected users.
- Prices use Sri Lankan rupees; vehicle distances use kilometres; places use familiar Sri Lankan province, district, and city names. Plan content in English, Sinhala, and Tamil.
- Fuel prices, charging details, ratings, and financial figures must identify their source or clearly state when they are estimates.

## 7. Acceptance criteria

1. Selecting a make and model returns only matching published listings; changing make clears an incompatible model; the buyer can return to the same selection.
2. A buyer can filter by individual seller/dealer, registered/unregistered status, and previous-owner count. Every displayed filter changes the results as expected.
3. An individual or dealer can submit a registered or unregistered vehicle and see it as pending; it appears publicly only after approval. Ownership information is required for used vehicles, with “unknown” allowed where appropriate. An unregistered vehicle clearly states its reason and registration responsibility.
4. Every published listing links to a seller page and that seller's vehicle gallery. Phone numbers remain hidden until the visitor clicks Show number.
5. Scheduled home banners display only within their active period and are manageable by authorized staff.
6. Public garage results contain only approved, current registrations, and unapproved or expired garages cannot appear to the public.
7. Fuel prices and stations and EV charge points display source/update time; missing or stale live status is not presented as current.
8. Users can find the Wagon R, BMW, and Mercedes-Benz clubs, inspect their pages, and follow the defined membership flow.
9. Sellers and admins can complete the listing lifecycle; buyers can save, compare, inquire, and report a vehicle.

## 8. Operating responsibilities and open decisions

Before launch, assign people to review vehicle listings and garages, manage banners, update fuel and charging information, approve clubs, support sellers, and handle reports. Each team needs a clear review schedule and a way to correct mistakes.

Confirm the wording and proof needed for ownership claims, acceptable garage registration documents, who may reveal a seller number, who approves sponsored banners, and the trusted sources for fuel prices and charging locations. If live station information is unavailable, show the last confirmed details and state that live availability is unknown.
