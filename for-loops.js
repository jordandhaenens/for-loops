/*
for (var i = 5; i <= 120; i += 10) {
	console.log(i);
}
*/
/*
for (var i = 4096; i >= 1; i = i / 2) {
	console.log(i);
}
*/


var presidents = [
	"George Washington",
	"John Adams", 
	"Thomas Jefferson", 
	"James Madison",
	"James Monroe", 
	"John Quincy Adams",
]
var newPrez = "Andrew Jackson, Martin Van Buren, William Henry Harrison, John Tyler, James Knox Polk, Zachary Taylor, Millard Fillmore, Franklin Pierce, James Buchanan, Abraham Lincoln, Andrew Johnson, Ulysses S. Grant, Rutherford Birchard Hayes, James Abram Garfield, Chester Alan Arthur, Grover Cleveland, Benjamin Harrison, Grover Cleveland, William McKinley, Theodore Roosevelt, William Howard Taft, Woodrow Wilson, Warren Gamaliel Harding, Calvin Coolidge, Herbert Clark Hoover, Franklin Delano Roosevelt, Harry S. Truman, Dwight David Eisenhower, John Fitzgerald Kennedy, Lyndon Baines Johnson, Richard Milhous Nixon, Gerald Rudolph Ford, James Earl Carter Jr., Ronald Wilson Reagan, George Herbert Walker Bush, William Jefferson Clinton, George Walker Bush, Barack Hussein Obama, Donald J. Trump";
newPrez = newPrez.split(", ");
presidents = presidents.concat(newPrez);


for (var i = 0; i < presidents.length; i++) {

	console.log("President #" + (i + 1) + " " + presidents[i]);
}

/*
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (prop in antSpecies) {
	console.log(prop)
}
*/