const loadSchetsboek2 = require('bundle-loader?lazy!entries/Schetsboek-2');
const loadNbis = require('bundle-loader?lazy!entries/1917_NieuweBeeldingInSchilderkunst_STIJL');
const loadBeo = require('bundle-loader?lazy!entries/1918_BepaaldeEnOnbepaalde_STIJL');

export default {
	'schetsboek-2': loadSchetsboek2,
	'1917-nieuwebeeldinginschilderkunst-stijl': loadNbis,
	'1918-bepaaldeenonbepaalde-stijl': loadBeo,
};
