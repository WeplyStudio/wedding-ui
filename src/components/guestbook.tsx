export default function GuestBook() {
  const [messages, setMessages] = useState<GuestbookMessageWithId[]>([]);
  const [isPending, startTransition] = useTransition();

  const fetchMessages = () => {
    startTransition(async () => {
      const fetchedMessages = await getGuestbookMessages();
      setMessages(fetchedMessages);
    });
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <section id="guestbook" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Wrapper Card dengan background shape */}
        <div
          className="
            relative bg-background/90 backdrop-blur-sm
            rounded-3xl shadow-xl border border-primary/10
            p-8 sm:p-10
          "
        >
          {/* Judul */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-5xl sm:text-6xl font-bold text-primary mb-3">
              Leave Your Wishes
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Share your thoughts and kind words with us.
            </p>
          </div>

          {/* Card dalam untuk Guestbook */}
          <Card className="bg-white/80 backdrop-blur rounded-2xl border shadow-md overflow-hidden">
            <CardHeader className="pb-4 text-center">
              <CardTitle className="font-serif text-3xl text-foreground">
                Guestbook
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                See what our friends and family have to say, and leave your own message!
              </CardDescription>
            </CardHeader>

            {/* List pesan */}
            <CardContent className="pt-2">
              <ScrollArea className="h-[350px] pr-3 sm:pr-4">
                <div className="space-y-4">
                  {isPending && messages.length === 0 ? (
                    <p className="text-muted-foreground text-center py-10 italic text-lg animate-pulse">
                      Loading messages...
                    </p>
                  ) : messages.length > 0 ? (
                    messages.map((msg, index) => (
                      <AnimateOnScroll
                        key={msg._id}
                        delay={index * 0.08}
                        className="
                          flex items-start gap-4 p-4 sm:p-5
                          rounded-xl border border-primary/10
                          bg-background shadow-sm
                          transition-all duration-300 hover:shadow-md hover:-translate-y-0.5
                        "
                      >
                        <Avatar className="h-10 w-10 sm:h-12 sm:w-12 ring-2 ring-primary/15 shadow">
                          <AvatarFallback className="font-bold text-primary">
                            {msg.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-semibold text-[15px] sm:text-lg text-foreground">
                              {msg.name}
                            </p>
                            <span className="text-[11px] px-2 py-0.5 rounded-full border border-primary/20 text-muted-foreground/80">
                              Guest
                            </span>
                          </div>
                          <p className="mt-1 text-muted-foreground">{msg.message}</p>
                          <p className="text-xs text-muted-foreground/70 mt-1 italic">
                            {new Date(msg.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </AnimateOnScroll>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-center py-10 italic">
                      Be the first to leave a message!
                    </p>
                  )}
                </div>
              </ScrollArea>
            </CardContent>

            {/* Form */}
            <CardFooter className="flex-col items-start gap-4 pt-6">
              <Separator className="opacity-60" />
              <div className="w-full">
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-primary mb-3">
                  Leave a Message
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Share your thoughts—be kind and respectful.
                </p>
                <GuestbookForm onMessageAdded={fetchMessages} />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}