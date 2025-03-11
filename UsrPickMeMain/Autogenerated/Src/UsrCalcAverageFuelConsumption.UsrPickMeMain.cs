namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrCalcAverageFuelConsumptionMethodsWrapper

	/// <exclude/>
	public class UsrCalcAverageFuelConsumptionMethodsWrapper : ProcessModel
	{

		public UsrCalcAverageFuelConsumptionMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrDriver");
			var mileageColumn = esq.AddColumn("UsrGeneralMileage");  // SELECT UsrGeneralMileage as UsrGeneralMileage, UsrFuelSpent as UsrFuelSpent FROM UsrDriver WHERE ...
			var fuelColumn = esq.AddColumn("UsrFuelSpent");
			
			Guid carBodyTypeId = Get<Guid>("CarBodyTypeIdParameter");
			
			var carBodyTypeFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrCarBodyType", carBodyTypeId);
			esq.Filters.Add(carBodyTypeFilter);  // ... WHERE UsrCarBodyTypeId = :carBodyTypeId 
			
			string sqlText = esq.GetSelectQuery(UserConnection).GetSqlText();
			Set("SqlTextParameter", sqlText);
			
			var entityCollection = esq.GetEntityCollection(UserConnection);
			decimal totalMileage = 0;
			decimal totalFuel = 0;
			foreach(var entity in entityCollection) {
				decimal mileage = entity.GetTypedColumnValue<decimal>(mileageColumn.Name); // reading using column alias
				decimal fuel = entity.GetTypedColumnValue<decimal>(fuelColumn.Name); // reading using column alias
				totalMileage = totalMileage + mileage;
				totalFuel = totalFuel + fuel;
			}
			
			decimal result = 0;
			if (totalMileage > 0) {
				result = totalFuel / totalMileage * 100;
			}
			
			Set("AvgFuelConsumptionParameter", result);
			
			return true;
		}

		#endregion

	}

	#endregion

}

