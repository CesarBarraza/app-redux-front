import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromEmpReducer from "./reducer";

export const selectEmpleadoState = createFeatureSelector<fromEmpReducer.EmpleadoState>(
   fromEmpReducer.empleadoStateFeatureKey,
)

export const selectEmpleados = createSelector(
    selectEmpleadoState,
    fromEmpReducer.selectAll
);

export const selectEmplado= createSelector(
    selectEmpleadoState,
    (state: fromEmpReducer.EmpleadoState) => state.selectEmpleado
);

export const selectAllEntities = createSelector(
    selectEmpleadoState,
    fromEmpReducer.selectEntities
);

export const entityExists = createSelector(
    selectAllEntities,
    (entities, props): boolean => {
        return entities[props.id] == undefined ? false : true
    }
);

export const selectEntityById = createSelector(
    selectAllEntities,
    (entities, props) => entities[props.id]
)