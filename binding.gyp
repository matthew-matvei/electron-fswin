{
	'targets':[
		{
			'target_name':'electron-fswin',
			'conditions':[
				['OS=="win"',{
					'sources':[
						'src/fswin.cpp'
					]
				}]
			]
		}
	]
}