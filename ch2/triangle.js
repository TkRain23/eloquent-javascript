/*

looping a triangle
write a loop that makes seven calls to console.log to output the following triangle

#
##
###
####
#####
######
#######

*/

// my shitty attempt
let string = '#';

for (let i = 1; i < 8; i += 1) {
  console.log(string);
  string += '#';
}

// the eloquent way
for (let line = '#'; line.length < 8; line += '#') {
  console.log(line);
}
