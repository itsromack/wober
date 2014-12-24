var woberApp = angular.module('woberApp', []);

// Attendance
woberApp.controller('PlacesAttendaceController', function(){
	this.places = places;
});

// Report
woberApp.controller('AttendanceSummaryController', function(){
	this.venue = "Apalit, Pampanga";
	this.as_of = "7:00 PM";
	this.guests = 400;
	this.brethren = 700;
	this.magtatanong = 2;
	this.total_attendees = 1100;
});

// Mga Magtatanong
woberApp.controller('MgaMagtatanongController', function(){
	this.persons = [
		{
			fullname: "John Doe",
			age: 30,
			religion: "Roman Catholic"
		},
		{
			fullname: "Jane Doe",
			age: 29,
			religion: "Born Again"
		}
	];
});

// Special Guests
woberApp.controller('SpecialGuestsController', function(){
	this.persons = [
		{
			fullname: "Barrack Obama",
			position: "President"
		},
		{
			fullname: "Benigno Aquino",
			position: "President"
		}
	];
});
