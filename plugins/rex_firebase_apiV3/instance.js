"use strict";

{
	const PLUGIN_CLASS = SDK.Plugins.Rex_FirebaseAPIV3;

	PLUGIN_CLASS.Instance = class Rex_FirebaseAPIV3Instance extends SDK.IInstanceBase
	{
		constructor(sdkType, inst)
		{
			super(sdkType, inst);
		}
		Release()
		{
		}
		OnCreate()
		{
		}
		OnPropertyChanged(id, value)
		{
		}
		LoadC2Property(name, valueString)
		{
			return false;       // not handled
		}
	};
}
