var woberApp = angular.module('woberApp', []);

// Attendance
woberApp.controller('PlacesAttendanceController', function(){
	this.places = AttendanceReport.placesAttendance;
});

// Report
woberApp.controller('AttendanceSummaryController', function(){
	this.venue = AttendanceReport.details.venue;
	this.timeAsOf = AttendanceReport.details.timeAsOf;

	this.guestsCount = AttendanceReport.details.totalGuests;
	this.brethrenCount = AttendanceReport.details.totalBrethren;
	this.specialGuestsCount = AttendanceReport.details.specialGuests;
	this.mgaMagtatanongCount = AttendanceReport.details.mgaMagtatanong;
	this.totalAttendees = AttendanceReport.details.overallTotal;
});

// Mga Magtatanong
woberApp.controller('MgaMagtatanongController', function(){
	this.persons = AttendanceReport.mgaMagtatanong;
});

// Special Guests
woberApp.controller('SpecialGuestsController', function(){
	this.persons = AttendanceReport.specialGuests;
});
