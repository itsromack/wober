var woberApp = angular.module('woberApp', []);

// Attendance
woberApp.controller('PlacesAttendanceController', function(){
	this.places = AttendanceReport.placesAttendance;
});

// Report
woberApp.controller('AttendanceSummaryController', function(){
	this.venue = AttendanceReport.details.venue;
	this.timeAsOf = AttendanceReport.details.timeAsOf;

	var totals = AttendanceReport.details.totals;
	this.guestsCount = totals.guests;
	this.brethrenCount = totals.brethren;
	this.specialGuestsCount = totals.specialGuests;
	this.mgaMagtatanongCount = totals.mgaMagtatanong;
	this.overallTotal = totals.overallTotal;
});

// Mga Magtatanong
woberApp.controller('MgaMagtatanongController', function(){
	this.persons = AttendanceReport.mgaMagtatanong;
});

// Special Guests
woberApp.controller('SpecialGuestsController', function(){
	this.persons = AttendanceReport.specialGuests;
});

// Zone 1 Total
woberApp.controller('Zone1TotalController', function(){
	this.guests = AttendanceReport.guests.zone1;
	this.brethren = AttendanceReport.brethren.zone1;
	this.subtotal = AttendanceReport.subtotal.zone1;
});

// Zone 2 Total
woberApp.controller('Zone2TotalController', function(){
	this.guests = AttendanceReport.guests.zone2;
	this.brethren = AttendanceReport.brethren.zone2;
	this.subtotal = AttendanceReport.subtotal.zone2;
});

// Zone 3 Total
woberApp.controller('Zone3TotalController', function(){
	this.guests = AttendanceReport.guests.zone3;
	this.brethren = AttendanceReport.brethren.zone3;
	this.subtotal = AttendanceReport.subtotal.zone3;
});

// OverAll Total
woberApp.controller('OverallTotalController', function(){
	this.guests = AttendanceReport.details.totals.guests;
	this.brethren = AttendanceReport.details.totals.brethren;
	this.subtotal = AttendanceReport.details.totals.subtotal;
});
