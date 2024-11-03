declare module '@react-navigation/native' {
    export function useNavigation(): any;
    export function useRoute(): any;
    // Add more types as necessary
  }
  
  declare module '@react-navigation/stack' {
    import { StackNavigationProp } from '@react-navigation/native';
    
    export type RootStackParamList = {
      Home: undefined;
      BookDetails: { book: Book };
      AddSummary: undefined;
      Profile: undefined;
    };
  
    export type Book = {
      id: string;
      title: string;
      summary: string;
    };
  
    export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
    export type BookDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BookDetails'>;
    export type AddSummaryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddSummary'>;
    export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;
  }
  