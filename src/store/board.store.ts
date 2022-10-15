import { Board, BoardIds } from "api/types";
import { IsLoading } from "core/IsLoading";
import { makeAutoObservable, runInAction } from "mobx";
import { BoardService } from "services/board.service";
import { errorHandler } from "utils/errorHandler";

export class BoardStore {
  constructor(private readonly boardService: BoardService, private readonly isLoadingState: IsLoading) {
    makeAutoObservable(this);
  }

  private _board: Board = [];
  private _activeBoard = BoardIds.MAIN;

  get isLoading() {
    return this.isLoadingState.value;
  }

  get board() {
    return this._board;
  }

  get activeBoard() {
    return this._activeBoard;
  }

  getBoard = async () => {
    this.isLoadingState.setTrue();
    try {
      const board = await this.boardService.board();
      board && runInAction(() => this._board = board);
    } catch (error) {
      errorHandler(error);
    }
    finally {
      this.isLoadingState.setFalse();
    }
  };

}
