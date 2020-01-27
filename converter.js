data = [
["eV"      , 1.0                 , "Electron volts"        ],
["H"       , 0.0367493088247366  , "Hartree"               ],
["Ry"      , 0.0734986176495245  , "Rydberg constant"      ],
["K"       , 11604.525           , "Kelvin"                ],
["cm^-1"   , 8065.5              , "Inverse centimetres"   ],
["Hz"      , 241799050402293     , "Hertz"                 ],
["GHz"     , 241799.05           , "Gigahertz"             ],
["THz"     , 241.799             , "Terahertz"             ],
["J"       , 1.60217733000001E-19, "Joule"                 ],
["KWh"     , 4.45049258333371E-26, "Killowatt-Hour"        ],
["NM"      , 1.60217733000001E-19, "Newton-Meter"          ],
["EP"      , 8.19067189815826E-29, "Planck Energy"         ],
["Kcal/mol", 23.258              , "Kilocalories per mole" ], 
]

for (i=0; i<data.length; ++i)
{
	d = data[i];

	label = document.createElement("div");
	label.innerHTML = d[2]
	document.body.appendChild(label);

	input = document.createElement("input");
	input.type="number";
	input.id = i;
	input.style = "width: 100%; margin-bottom: 5px;"
	input.onchange = (event) =>
	{
		k = parseInt(event.target.id);
		for (j=0; j<data.length; ++j)
		{
			ej = document.getElementById(""+j);
			ej.value = event.target.value * data[j][1]/data[k][1];
		}
	};
	document.body.appendChild(input);
}
