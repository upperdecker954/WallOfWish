const keys = [];

export function load(db) {
	return new Promise((res, rej) => {
		db.on('value', (s) => {
	    const temp = [];
	    s.forEach((c) => {
	      const key = c.key;
	      if(keys.indexOf(key) === -1) {
	        const author = c.val().author;
	        const txt = c.val().txt;
	        const newData = {};
	        newData.author = author;
	        newData.txt = txt;
	        newData.key = key;
	        
	        temp.push(newData);
	        keys.push(key);
	      }
	    });
	    res(temp);
	  });
	});
}

export function post(db, data) {
	db.push(data);
}