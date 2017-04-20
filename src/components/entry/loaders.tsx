const loadSchetsboek1 = require('bundle-loader?lazy!entries/Schetsboek-1');
const loadSchetsboek2 = require('bundle-loader?lazy!entries/Schetsboek-2');
const loadNbis = require('bundle-loader?lazy!entries/1917_NieuweBeeldingInSchilderkunst_STIJL');
const loadBeo = require('bundle-loader?lazy!entries/1918_BepaaldeEnOnbepaalde_STIJL');

export default {
	'schetsboek-1': loadSchetsboek1,
	'schetsboek-2': loadSchetsboek2,
	'nieuwe-beelding-in-schilderkunst': loadNbis,
	'bepaalde-en-onbepaalde-stijl': loadBeo,
};
