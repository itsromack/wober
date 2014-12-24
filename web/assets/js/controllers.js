var woberApp = angular.module('woberApp', []);

// Attendance
woberApp.controller('PlacesAttendanceController', function(){
	this.places = AttendanceReport.placesAttendance;
});

// Report
woberApp.controller('AttendanceSummaryController', function(){
	this.venue = AttendanceReport.details.venue;
	this.timeAsOf = AttendanceReport.details.timeAsOf;
	this.guestsCount = AttendanceReport.details.guestsCount;
	this.brethrenCount = AttendanceReport.details.brethrenCount;
	this.mgaMagtatanongCount = AttendanceReport.details.mgaMagtatanongCount;
	this.specialGuestsCount = AttendanceReport.details.specialGuestsCount;
	this.totalAttendees = AttendanceReport.details.totalAttendees;
});

// Mga Magtatanong
woberApp.controller('MgaMagtatanongController', function(){
	this.persons = AttendanceReport.mgaMagtatanong;
});

// Special Guests
woberApp.controller('SpecialGuestsController', function(){
	this.persons = AttendanceReport.specialGuests;
});
