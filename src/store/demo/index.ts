export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';
export const UPDATE_GOAL = 'UPDATE_GOAL';
export interface AddGoal{
  type: typeof ADD_GOAL,
  goal: Goal,
}

export interface RemoveGoal {
  type: typeof REMOVE_GOAL,
  id: number,
}

export interface UpdateGoal {
  type: typeof UPDATE_GOAL,
  id: number,
  goal: Goal,
}

export type GoalActions = AddGoal | RemoveGoal | UpdateGoal;

export interface Goal {
  id: number,
  title: string,
  description: string,
}


// reducers
const initialState = {
  loading: false,
  goals: [] as Array<Goal>,
}

type State = typeof initialState;

export const goalReducer = (state: State, action: GoalActions): State => {
  switch (action.type) {
    case "ADD_GOAL":
      return {
        ...state,
        goals: [...state.goals, action.goal],
      }
    case "REMOVE_GOAL":
      // const { id, title, description } = action.goal;
      return {
        ...state,
        goals: [],
      }
    case "UPDATE_GOAL":
      const { id, title, description } = action.goal;
      const updatedGoalList = [] as Array<Goal>;
      return {
        ...state,
        goals: updatedGoalList,
      }
  }
}


