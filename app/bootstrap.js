/*
	Configuracion de carga de archivos con react JS
 */
import React from 'react';
import DOM, {render} from 'react-dom';
import {Window} from './components/window';

//Carga de datos para ventana
const main_window = <Window title="Inicio" />;

//Funcion de renderizado de elementos
render(
	main_window, 
	document.getElementById('app')
);