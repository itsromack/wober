var AttendanceReport = {
	init: function(venue, timeAsOf, placesAttendance, mgaMagtatanong, specialGuests){
		this.details.venue = venue;
		this.details.timeAsOf = timeAsOf;
		this.placesAttendance = placesAttendance;
		this.mgaMagtatanong = mgaMagtatanong;
		this.specialGuests = specialGuests;
		this.details.totals.mgaMagtatanong = mgaMagtatanong.length;
		this.details.totals.specialGuests = specialGuests.length;
	},
	placesAttendance: [],
	mgaMagtatanong: [],
	specialGuests: [],
	details: {
		venue: null,
		timeAsOf: null,
		totals: {
			guests: 0,
			brethren: 0,
			subtotal: 0,
			mgaMagtatanong: 0,
			specialGuests: 0,
			overallTotal: 0
		},
	},
	guests: {zone1: 0, zone2: 0, zone3: 0, otherDivision: 0, total: 0},
	brethren: {zone1: 0, zone2: 0, zone3: 0, otherDivision: 0, total: 0},
	subtotal: {zone1: 0, zone2: 0, zone3: 0, otherDivision: 0, total: 0},
	countAttendees: function(){
		$.each(this.placesAttendance, function(index, data){
			if (data.zone == 1) {
				AttendanceReport.guests.zone1 += data.guests;
				AttendanceReport.brethren.zone1 += data.brethren;
				AttendanceReport.subtotal.zone1 += data.guests + data.brethren;
			} else if (data.zone == 2) {
				AttendanceReport.guests.zone2 += data.guests;
				AttendanceReport.brethren.zone2 += data.brethren;
				AttendanceReport.subtotal.zone2 += data.guests + data.brethren;
			} else if (data.zone == 3) {
				AttendanceReport.guests.zone3 += data.guests;
				AttendanceReport.brethren.zone3 += data.brethren;
				AttendanceReport.subtotal.zone3 += data.guests + data.brethren;
			} else {
				if (data.name == "Other Division") {
					AttendanceReport.guests.otherDivision += data.guests;
					AttendanceReport.brethren.otherDivision += data.brethren;
					AttendanceReport.subtotal.otherDivision += data.guests + data.brethren;
				}
			}
			AttendanceReport.details.totals.guests += data.guests;
			AttendanceReport.details.totals.brethren += data.brethren;
			AttendanceReport.details.totals.subtotal += data.subtotal;
		});
		AttendanceReport.details.totals.overallTotal = 
			AttendanceReport.details.totals.guests
			+ AttendanceReport.details.totals.brethren
			+ AttendanceReport.details.totals.subtotal;
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
	    guests: 1,
	    brethren: 1,
	    subtotal: 1
	},
	{
		district: venue,
		zone: 1,
	    name: "Group 2",
	    visible: true,
	    guests: 2,
	    brethren: 2,
	    subtotal: 2
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
	    guests: 5,
	    brethren: 5,
	    subtotal: 5
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
AttendanceReport.countAttendees();
