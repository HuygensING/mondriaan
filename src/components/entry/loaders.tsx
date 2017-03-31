const loadSchetsboek1 = require('bundle-loader?lazy!common/entries/Schetsboek-2');
const loadNbis = require('bundle-loader?lazy!common/entries/1917_NieuweBeeldingInSchilderkunst_STIJL');
const loadBeo = require('bundle-loader?lazy!common/entries/1918_BepaaldeEnOnbepaalde_STIJL');

export default {
	'schetsboek-1': loadSchetsboek1,
	'nieuwe-beelding-in-schilderkunst': loadNbis,
	'bepaalde-en-onbepaalde': loadBeo,
};
