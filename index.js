let cons1 = ['б', 'в', 'г', 'д', 'ж', 'з', 'к', 'л', 'м', 'н'];
let cons2 = ['щ', 'ш', 'ч', 'ц', 'х', 'ф', 'т', 'с', 'р', 'п'];

const encrypt = (message = "") => {

	var msg = "";

	for (let i in message) 
	{
		var found = false;

		for (let c1 in cons1) 
		{	
			if (cons1[c1] == message[i]) 
			{
				found = true;
				msg += cons2[c1];
			}
		}

		if (found == false) 
		{
			for (let c1 in cons2) 
			{
				if (cons2[c1] == message[i]) 
				{
					found = true;
					msg += cons1[c1];
				}
			}
		}

		if (found == false) msg += message[i];
	}

	return msg;
};

const decrypt = (message = "") => {
	
	var msg = "";

	for (let i in message) 
	{
		var found = false;

		for (let c1 in cons1) 
		{	
			if (cons1[c1] == message[i]) 
			{
				found = true;
				msg += cons2[c1];
			}
		}

		if (found == false) 
		{
			for (let c1 in cons2) 
			{
				if (cons2[c1] == message[i]) 
				{
					found = true;
					msg += cons1[c1];
				}
			}
		}

		if (found == false) msg += message[i];
	}

	return msg;
}


module.exports = { encrypt, decrypt }