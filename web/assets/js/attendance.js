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
			console.log(data);
			if (data.zone == 1) {
				this.guests.zone1 += data.guests;
				this.brethren.zone1 += data.brethren;
				this.subtotal.zone1 += data.guests + data.brethren;
			} else if (data.zone == 2) {
				this.guests.zone2 += data.guests;
				this.brethren.zone2 += data.brethren;
				this.subtotal.zone2 += data.guests + data.brethren;
			} else if (data.zone == 3) {
				this.guests.zone3 += data.guests;
				this.brethren.zone3 += data.brethren;
				this.subtotal.zone3 += data.guests + data.brethren;
			} else {
				if (data.name == "Other Division") {
					this.guests.otherDivision += data.guests;
					this.brethren.otherDivision += data.brethren;
					this.subtotal.otherDivision += data.guests + data.brethren;
				}
			}
		});
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
AttendanceReport.countAttendees()