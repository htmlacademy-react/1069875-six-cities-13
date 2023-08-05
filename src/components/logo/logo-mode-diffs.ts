import { LogoMode } from '../../const/modes';

type LogoModeDiffs = {
  [mode: string]: {
    Width: number;
    Height: number;
  };
}

const LogoModeDiffs: LogoModeDiffs = {
  [LogoMode.Header]: {
    Width: 81,
    Height: 41,
  },
  [LogoMode.Footer]: {
    Width: 64,
    Height: 33,
  },
};

export default LogoModeDiffs;
