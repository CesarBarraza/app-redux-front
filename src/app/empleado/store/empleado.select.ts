import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromEmpReducer from "./reducer";

export const selectEmpleadoState = createFeatureSelector<fromEmpReducer.EmpleadoState>(
   fromEmpReducer.empleadoStateFeatureKey,
)

export const selectEmpleados = createSelector(
    selectEmpleadoState,
    fromEmpReducer.selectAll
);

export const selectEmpladoId= createSelector(
    selectEmpleadoState,
    fromEmpReducer.selectIds
)