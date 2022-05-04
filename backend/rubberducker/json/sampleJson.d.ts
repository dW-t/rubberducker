declare module '*/sample.json' {
  interface Sample {
    UserName: string;
    Profile: {
      MainProfile: string;
      SubProfile: string;
    };
    BackGroundImage: string;
    UserIcon: string;
    Contents: [
      {
        MainContent: {
          Date: string;
          Body: string;
          LikeCount: string;
        };
        ReplyCount: string;
        Reply: [
          {
            UserName: string;
            UserIcon: string;
            Body: string;
          }
        ];
      }
    ];
  }

  const value: Sample;
  export = value;
}
