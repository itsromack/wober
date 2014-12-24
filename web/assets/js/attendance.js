var AttendanceReport = {
	init: function(venue, timeAsOf, placesAttendance, mgaMagtatanong, specialGuests){
		this.details.venue = venue;
		this.details.timeAsOf = timeAsOf;
		this.placesAttendance = placesAttendance;
		this.mgaMagtatanong = mgaMagtatanong;
		this.specialGuests = specialGuests;
		// TODO count guests and brethren
		// this.details.guestsCount = guestsCount;
		// this.details.brethrenCount = brethrenCount;
		this.details.mgaMagtatanongCount = mgaMagtatanong.length;
		this.details.specialGuestsCount = specialGuests.length;
		// TODO compute total guests
		// this.details.totalAttendees = 0;
	},
	placesAttendance: [],
	mgaMagtatanong: [],
	specialGuests: [],
	details: {
		venue: null,
		timeAsOf: null,
		guestsCount: null,
		brethrenCount: null,
		mgaMagtatanong: null,
		specialGuests: null,
		totalAttendees: null
	}
}

var venue = 'Central Division';
var timeAsOf = "7:00 PM";
var placesAttendance = [
	{
		district: venue,
		zone: 1,
	    name: "Group 1",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 1,
	    name: "Group 2",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 1,
	    name: "Group 3",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 1,
	    name: "Group 4",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 1,
	    name: "Group 5",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 1,
	    name: "Group 6",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 1,
	    name: "Group 7",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 2,
	    name: "Capalangan",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 2,
	    name: "Old Central",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 2,
	    name: "San Juan",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 2,
	    name: "San Juan",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 2,
	    name: "San Nicholas",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 2,
	    name: "San Simon",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 2,
	    name: "Sulipan",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 2,
	    name: "Sto. Domingo",
	    visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 3,
		name: "Alauli",
		visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 3,
		name: "Dalaquitan",
		visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 3,
		name: "Palimpe",
		visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: venue,
		zone: 3,
		name: "San Esteban",
		visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	},
	{
		district: false,
		zone: false,
		name: "Other Division",
		visible: true,
	    guests: 0,
	    brethren: 0,
	    subtotal: 0
	}
];
var specialGuests = [
	{
		fullname: "Barrack Obama",
		position: "President"
	},
	{
		fullname: "Benigno Aquino",
		position: "President"
	}
];
var mgaMagtatanong = [
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

AttendanceReport.init(venue, timeAsOf, placesAttendance, mgaMagtatanong, specialGuests);

console.log(AttendanceReport);