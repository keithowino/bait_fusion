Key limitation (platform constraint): Backend functions require a Builder+ plan, so grading and mastery logic run client-side. Answer keys are stored in the public Question entity and are technically accessible via direct API calls. In production with Builder+, this should move to server-side backend functions. Stage ordering and prerequisite enforcement are also client-side — a determined user could bypass them via direct SDK calls.

Not yet built (deferred for future turns): Admin area, content reports UI, spaced review, bookmarks/notes/glossary, content versioning, automated tests, README.
